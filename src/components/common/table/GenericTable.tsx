import { capitalizeString } from "../../../utils/utils";

interface IGenericTableProps<T> {
  headElements: string[];
  data: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GenericTable = <T extends Record<string, any>>({
  headElements,
  data,
}: IGenericTableProps<T>) => {
  return (
    <table className="min-w-full text-left text-sm">
      <thead className="text-slate-300">
        <tr>
          {headElements.map((elem, index) => (
            <th className="px-2 py-2" key={index}>
              {capitalizeString(elem)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} className="border-t border-white/10 text-slate-100">
            {headElements.map((col, colIndex) => (
              <td className="px-2 py-2" key={colIndex}>
                {item[col.toLowerCase()]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};