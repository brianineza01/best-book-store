import { TypographyExample } from "@/components/Typography/TypographyExample";

export const metadata = {
  title: "Typography Example | Best Book Store",
  description: "Example page demonstrating Tailwind Typography plugin",
};

export default function TypographyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Typography Examples</h1>

      <div className="grid gap-8">
        {/* Default Typography */}
        <section className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Default Typography</h2>
          <TypographyExample />
        </section>

        {/* Dark Mode Typography */}
        <section className="bg-eerie-black rounded-lg border p-6 shadow-sm">
          <h2 className="text-seasalt mb-4 text-2xl font-semibold">
            Dark Mode Typography
          </h2>
          <TypographyExample className="dark:prose-invert" />
        </section>

        {/* Different Size Variants */}
        <section className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">
            Typography Size Variants
          </h2>

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-medium">Small (prose-sm)</h3>
            <div className="prose prose-sm rounded-lg border p-4">
              <h4>Small Typography Example</h4>
              <p>
                This is an example of small typography using the prose-sm class.
                It&apos;s perfect for content that needs to be more compact.
              </p>
              <ul>
                <li>Smaller font sizes</li>
                <li>Tighter line spacing</li>
                <li>Compact overall appearance</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-medium">Extra Large (prose-xl)</h3>
            <div className="prose prose-xl rounded-lg border p-4">
              <h4>Extra Large Typography Example</h4>
              <p>
                This is an example of extra large typography using the prose-xl
                class. It&apos;s great for content that needs more emphasis.
              </p>
              <ul>
                <li>Larger font sizes</li>
                <li>More generous line spacing</li>
                <li>Overall more spacious appearance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
