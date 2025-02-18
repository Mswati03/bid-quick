import type { Specification } from "@/types/auction"

export function Specifications({ specs }: { specs: Specification[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Specifications</h3>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
        {specs.map((spec) => (
          <div key={spec.id} className="border-t border-gray-200 pt-2">
            <dt className="font-medium text-gray-500">{spec.id}</dt>
            <dd className="mt-1 text-gray-900">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}