import Link from "next/link";

export default function AdminHomePage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow-luxury">Atelier Marble Admin</p>
        <h1 className="mt-3 font-title text-4xl text-ink">Content management</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link href="/admin/factory" className="card-luxury bg-stone p-7 transition hover:-translate-y-0.5">
            <p className="eyebrow-luxury">Factory Journal</p>
            <h2 className="mt-3 font-title text-2xl text-ink">Manage workshop records</h2>
            <p className="mt-3 text-sm leading-7 text-ink/65">Upload a verified image, add its field note, and publish or save it as a draft.</p>
          </Link>
          <Link href="/admin/cases" className="card-luxury bg-stone p-7 transition hover:-translate-y-0.5">
            <p className="eyebrow-luxury">Project References</p>
            <h2 className="mt-3 font-title text-2xl text-ink">Manage project records</h2>
            <p className="mt-3 text-sm leading-7 text-ink/65">Add a verified reference with material, scope, image, and an explicit evidence label.</p>
          </Link>
          <Link href="/admin/pages" className="card-luxury bg-stone p-7 transition hover:-translate-y-0.5">
            <p className="eyebrow-luxury">Pages</p>
            <h2 className="mt-3 font-title text-2xl text-ink">Create structured pages</h2>
            <p className="mt-3 text-sm leading-7 text-ink/65">Manage localized title, SEO fields, text modules, and publication status.</p>
          </Link>
          <Link href="/admin/media" className="card-luxury bg-stone p-7 transition hover:-translate-y-0.5">
            <p className="eyebrow-luxury">Media Library</p>
            <h2 className="mt-3 font-title text-2xl text-ink">Manage image metadata</h2>
            <p className="mt-3 text-sm leading-7 text-ink/65">Upload reusable images, assign a category, and keep titles and alt text together.</p>
          </Link>
          <Link href="/admin/cases" className="card-luxury bg-stone p-7 transition hover:-translate-y-0.5">
            <p className="eyebrow-luxury">Project References</p>
            <h2 className="mt-3 font-title text-2xl text-ink">Manage project records</h2>
            <p className="mt-3 text-sm leading-7 text-ink/65">Add a verified reference with material, scope, image, and an explicit evidence label.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
