import React from 'react'

type TypographyVariant = 'span' | 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'
type TypographyColor = 'primary' | 'secondary' | 'accent' | 'nero' | 'zambezi'

interface TypographyProps {
  variant: TypographyVariant
  color: TypographyColor
  className?: string
  children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({ variant, color, className = '', children }) => {

  // function to get the size class based on the variant prop
  const getSizeClassName = (): string => {
    const sizeClasses: Record<TypographyVariant, string> = {
      span: 'text-xxs',
      p: 'text-xs',
      h6: 'text-sm',
      h5: 'text-md',
      h4: 'text-lg',
      h3: 'text-xl',
      h2: 'text-2xl',
      h1: 'text-3xl',
    }
    return sizeClasses[variant]
  }

  // function to get the color class based on the color prop
  const getColorClassName = (color: TypographyColor): string => {
    const colorClasses: Record<TypographyColor, string> = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      nero: 'text-nero',
      zambezi: 'text-zambezi',
    }
    return colorClasses[color]
  }

  // get the size class based on the size prop
  const sizeClass = getSizeClassName()
  // get the color class based on the color prop
  const colorClass = getColorClassName(color)
  // combine the size class, color class, and additional className prop
  const combinedClassName = `${sizeClass} ${colorClass} ${className}`.trim()

  return React.createElement(variant, { className: combinedClassName }, children)
}

export default Typography