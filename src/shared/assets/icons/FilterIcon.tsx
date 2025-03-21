interface FilterIconProp {
  className?: string
}
export function FilterIcon({className}: FilterIconProp) {
  return (
      <svg
        className={className}
        style={{width: '11px'}}
        xmlns="http://wpx.w3.org/2000/svg"
        viewBox="0 0 63.42 100"
      >
        <defs>
          <style>{`.cls-1 { fill: #1d1d1b; }`}</style>
        </defs>
        <path
          className="cls-1"
          d="M13.75,22.59V.38h-6V22.59a10.75,10.75,0,0,0,0,20.64V99.62h6V43.23a10.75,10.75,0,0,0,0-20.64Z"
        ></path>
        <path
          className="cls-1"
          d="M63.42,67.09a10.75,10.75,0,0,0-7.75-10.32V.38h-6V56.77a10.75,10.75,0,0,0,0,20.64V99.62h6V77.41A10.75,10.75,0,0,0,63.42,67.09Z"
        ></path>
      </svg>
  )
}
