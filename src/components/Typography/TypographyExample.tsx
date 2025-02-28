import React from "react";

interface TypographyExampleProps {
  className?: string;
}

export function TypographyExample({ className }: TypographyExampleProps) {
  return (
    <div className={`container mx-auto py-8 ${className}`}>
      <div className="prose prose-lg max-w-none">
        <h1>Tailwind Typography Example</h1>
        <p className="lead">
          This component demonstrates the use of the @tailwindcss/typography
          plugin which provides a set of prose classes to beautifully style your
          HTML content.
        </p>

        <h2>What is Tailwind Typography?</h2>
        <p>
          The Typography plugin for Tailwind CSS provides a set of ready-to-use
          classes that make it easy to style any HTML content with beautiful
          typography.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Responsive typography that looks great on all devices</li>
          <li>Consistent spacing between elements</li>
          <li>
            Beautiful styling for lists, blockquotes, code blocks, and more
          </li>
          <li>Customizable to match your brand</li>
        </ul>

        <blockquote>
          <p>
            &ldquo;Good typography makes the reading experience more enjoyable
            and helps convey your message more effectively.&rdquo;
          </p>
        </blockquote>

        <h3>Code Example</h3>
        <pre>
          <code>{`// How to use the typography plugin
<div className="prose">
  <h1>Your Title</h1>
  <p>Your content goes here...</p>
</div>`}</code>
        </pre>

        <h3>Different Typography Modifiers</h3>
        <p>
          The plugin comes with several modifiers that you can use to adjust the
          styling:
        </p>
        <ul>
          <li>
            <code>prose-sm</code>: Smaller text size
          </li>
          <li>
            <code>prose-base</code>: Default text size
          </li>
          <li>
            <code>prose-lg</code>: Larger text size
          </li>
          <li>
            <code>prose-xl</code>: Extra large text size
          </li>
          <li>
            <code>prose-2xl</code>: Double extra large text size
          </li>
        </ul>

        <h3>Color Modifiers</h3>
        <p>You can also modify the colors using these classes:</p>
        <ul>
          <li>
            <code>prose-primary</code>: Uses your primary color
          </li>
          <li>
            <code>prose-secondary</code>: Uses your secondary color
          </li>
          <li>
            <code>prose-gray</code>: Uses gray colors
          </li>
          <li>
            <code>prose-neutral</code>: Uses neutral colors
          </li>
        </ul>

        <h3>Dark Mode</h3>
        <p>
          For dark mode support, you can use the <code>dark:prose-invert</code>{" "}
          class to invert the colors when dark mode is active.
        </p>
      </div>
    </div>
  );
}
