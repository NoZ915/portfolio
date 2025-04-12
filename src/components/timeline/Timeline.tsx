export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="relative border-l border-gray-300 ml-4">{children}</div>;
}

export function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: { text: string; link?: string; subitems?: { text: string; link?: string }[] }[]; // 新增子項目
}) {
  const renderSubitems = (subitems: { text: string; link?: string }[]) => (
    <ul className="list-inside pl-5 text-sm text-gray-400 space-y-1">
      {subitems.map((subitem, subindex) => (
        <li key={subindex}>
          {subitem.link ? (
            <a
              href={subitem.link}
              className="text-gray-500 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {subitem.text}
            </a>
          ) : (subitem.text)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mb-10 ml-4 relative">
      <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-5.5 top-1.5" />
      <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{year}</time>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <ul className="list-disc list-outside pl-5 text-base font-normal text-gray-500 space-y-1">
        {description.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a
                href={item.link}
                className="text-gray-500 hover:text-gray-800 mb-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (<div className="mb-1">{item.text}</div>)}
            {item.subitems && renderSubitems(item.subitems)}
          </li>
        ))}
      </ul>
    </div>
  );
}

