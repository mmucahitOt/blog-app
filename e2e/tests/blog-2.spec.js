const { test, expect, beforeEach, describe } = require("@playwright/test");
const { loginWith } = require("../helpers/helper");
const mongoose = require("mongoose");

describe("Blog app", () => {
  const user = {
    id: new mongoose.Types.ObjectId().toString(),
    username: "testuser",
    name: "Test User",
    password: "testpassword",
  };

  const blogs = [
    {
      title: "Test Blog 1",
      author: "Test Author 1",
      url: "https://test.com",
      userId: user.id,
      likes: 0,
    },
    {
      title: "Test Blog 2",
      author: "Test Author 2",
      url: "https://test2.com",
      userId: user.id,
      likes: 1,
    },
    {
      title: "Test Blog 3",
      author: "Test Author 3",
      url: "https://test3.com",
      userId: user.id,
      likes: 2,
    },
  ];

  beforeEach(async ({ page, request }) => {
    await page.goto("http://localhost:5173");

    // Reset database before each test
    await request.get("http://localhost:3000/testing/reset-database");

    // Create user with blogs
    await request.post("http://localhost:3000/testing/create-user", {
      data: {
        username: user.username,
        name: user.name,
        password: user.password,
        id: user.id,
      },
    });

    // Create blogs
    for (const blog of blogs) {
      await request.post("http://localhost:3000/testing/create-blog", {
        data: {
          title: blog.title,
          author: blog.author,
          url: blog.url,
          userId: user.id,
          likes: blog.likes,
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay between creations
    }

    // Login and wait for page to load
    await loginWith({ page, username: user.username, password: user.password });
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000); // Give extra time for blogs to load
  });

  describe("When logged in", () => {
    test("Blogs are sorted by likes in descending order", async ({ page }) => {
      // Wait for blogs heading to be visible
      const blogsHeading = page.getByRole("heading", { name: /blogs/i });
      await expect(blogsHeading).toBeVisible({ timeout: 10000 });

      // Wait for all blog titles to be visible (title + author format)
      const blogTitles = page.getByText(/Test Blog \d Test Author \d/);
      await expect(blogTitles).toHaveCount(blogs.length, { timeout: 10000 });

      // Click view button for each blog to expand them
      const viewButtons = page
        .getByRole("button")
        .filter({ hasText: /view|hide/ });
      await expect(viewButtons).toHaveCount(blogs.length, { timeout: 5000 });

      for (let i = 0; i < blogs.length; i++) {
        const currentButton = viewButtons.nth(i);
        await currentButton.click();
        await page.waitForLoadState("networkidle");
      }

      // Get all like counts after expanding
      const likeCounts = page.getByText(/^[0-2]$/); // Matches 0, 1, or 2
      await expect(likeCounts).toHaveCount(blogs.length, { timeout: 5000 });

      // Verify blogs are sorted by likes (descending)
      // Blog 3 should be first (2 likes)
      await expect(blogTitles.nth(0)).toContainText(
        `${blogs[2].title} ${blogs[2].author}`,
        { timeout: 5000 }
      );
      await expect(likeCounts.nth(0)).toHaveText("2", { timeout: 5000 });

      // Blog 2 should be second (1 like)
      await expect(blogTitles.nth(1)).toContainText(
        `${blogs[1].title} ${blogs[1].author}`,
        { timeout: 5000 }
      );
      await expect(likeCounts.nth(1)).toHaveText("1", { timeout: 5000 });

      // Blog 1 should be last (0 likes)
      await expect(blogTitles.nth(2)).toContainText(
        `${blogs[0].title} ${blogs[0].author}`,
        { timeout: 5000 }
      );
      await expect(likeCounts.nth(2)).toHaveText("0", { timeout: 5000 });
    });
  });
});
