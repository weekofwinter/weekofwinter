import s from "./BookButton.module.css"
import PropTypes from 'prop-types';

/**
 * Book button
 * @component
 * @example
 * <BookButton
 * href="www.weekofwinter.se"
 * />
 */

export default function BookButton(
  {
    title="Boka nu!",
    subtitle="",
    href,
    size=1,
    popular=true,
    containerStyle,
    subTitleStyle
  }) {

  return (
    <div style={{transform: `scale(${size})`, ...containerStyle}} className={s.container}>
      <a 
        href={href} 
        target={"_blank"} 
        className={`${s.button} ${popular ? s.buttonPopular : ""} `}
      >
        {title}
      </a>
      <p style={subTitleStyle} className={s.subtitle}>{subtitle}</p>
    </div>
  )
}

BookButton.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  href: PropTypes.string.isRequired,
  size: PropTypes.number,
  popular: PropTypes.bool,
}
