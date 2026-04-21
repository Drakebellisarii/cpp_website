import { useState } from 'react';
import { cn } from '../../lib/utils';

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className={cn('w-full bg-brand-cream text-brand-navy p-8', className)}>
      <div className="max-w-4xl mx-auto">

        {/* Optional header */}
        {(title || headerIcon) && (
          <div className="text-center mb-12 md:mb-16">
            {headerIcon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 mb-6 text-brand-gold">
                {headerIcon}
              </div>
            )}
            {title && (
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy mb-2 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="font-serif text-4xl md:text-5xl font-light text-brand-muted italic">
                {subtitle}
              </h3>
            )}
          </div>
        )}

        {/* Category rows */}
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  'relative overflow-hidden border bg-white transition-all duration-300 ease-in-out cursor-default',
                  hoveredItem === category.id
                    ? 'h-32 border-brand-gold shadow-[0_8px_32px_rgba(201,168,76,0.15)] bg-brand-gold/5'
                    : 'h-24 border-brand-border hover:border-brand-gold/40'
                )}
              >
                {/* Corner brackets on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-px bg-brand-gold" />
                      <div className="absolute top-0 left-0 w-px h-4 bg-brand-gold" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-px bg-brand-gold" />
                      <div className="absolute bottom-0 right-0 w-px h-4 bg-brand-gold" />
                    </div>
                  </>
                )}

                {/* Pillar number — ghost background element */}
                <div className="absolute right-20 top-1/2 -translate-y-1/2 font-serif text-7xl font-light text-brand-navy/5 select-none pointer-events-none leading-none">
                  {category.id}
                </div>

                {/* Row content */}
                <div className="flex items-center justify-between h-full px-6 md:px-8">
                  <div className="flex-1 pr-4">
                    <h3
                      className={cn(
                        'font-serif font-light transition-colors duration-300',
                        category.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl',
                        hoveredItem === category.id ? 'text-brand-navy' : 'text-brand-navy'
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          'mt-1 transition-colors duration-300 text-sm leading-relaxed',
                          hoveredItem === category.id
                            ? 'text-brand-navy/70'
                            : 'text-brand-muted'
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon on hover */}
                  {category.icon && (
                    <div
                      className={cn(
                        'text-brand-gold transition-all duration-300 flex-shrink-0',
                        hoveredItem === category.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      )}
                    >
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
