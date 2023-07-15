import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="flex justify-center p-12">
      <div className="mt-8 max-w-md">
        <h2 className="mb-8 font-heading text-3xl">
          Starting or updating a project? <br /> Please share below a few
          details and we&apos;ll get back to you.
        </h2>
        <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-900 underline decoration-indigo-500 decoration-double dark:text-white">Contact Info</h3>
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-gray-700 dark:text-muted-foreground">Full name</span>
            <input
              type="text"
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-muted-foreground">Company</span>
            <input
              type="text"
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-muted-foreground">Email address</span>
            <input
              type="email"
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
              placeholder="john@example.com"
            />
          </label>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 underline decoration-indigo-500 decoration-double dark:text-white">Project Info</h3>
          <label className="block">
            <span className="text-gray-700 dark:text-muted-foreground">Target launch date?</span>
            <input
              type="date"
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-muted-foreground">What type of work?</span>
            <select name="selectedProject" className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit">
              <option>Development</option>
              <option>Design + Development</option>
              <option>Self hosted</option>
              <option>No code</option>
              <option>Documentation</option>
              <option>Content Management</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-muted-foreground">Budget range</span>
            <select name="selectedBudget" defaultValue="3" className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit">
              <option value="1">$5,000-$8,000</option>
              <option value="2">$8,000-$15,000</option>
              <option value="3">$15,000-$30,000</option>
              <option value="4">$30,000-$45,000</option>
              <option value="5">$45,000-$65,000</option>
              <option value="6">$85,000+</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-white">Additional details</span>
            <textarea
              className="mt-2 block w-full rounded-lg border-gray-300 p-2 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:bg-inherit"
              rows={3}
            />
          </label>
          <div className="block">
            <div className="mt-1">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                    checked={false}
                  />
                  <span className="">Email me news and special offers</span>
                </label>
              </div>
              <div>
                <Button
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "mt-8 px-4"
                  )}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
