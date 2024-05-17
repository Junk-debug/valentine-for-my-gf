import { ButtonHTMLAttributes } from "react";

const HeartButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      {...props}
      className={`${props.className} text-red-600 active:scale-105 relative hover:text-red-500 transition-colors`}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        {props.children}
      </span>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.645 17.9101L9.638 17.9071L9.616 17.8951C9.48729 17.8243 9.35961 17.7516 9.233 17.6771C7.71081 16.7726 6.28828 15.71 4.989 14.5071C2.688 12.3601 0.25 9.17407 0.25 5.25007C0.25 2.32207 2.714 7.09512e-05 5.688 7.09512e-05C6.51475 -0.00397848 7.33178 0.178412 8.07832 0.533676C8.82486 0.888941 9.48171 1.40794 10 2.05207C10.5184 1.40781 11.1754 0.888729 11.9221 0.533459C12.6689 0.178188 13.4861 -0.00412905 14.313 7.09512e-05C17.286 7.09512e-05 19.75 2.32207 19.75 5.25007C19.75 9.17507 17.312 12.3611 15.011 14.5061C13.7117 15.709 12.2892 16.7716 10.767 17.6761C10.6404 17.7509 10.5127 17.8239 10.384 17.8951L10.362 17.9071L10.355 17.9111L10.352 17.9121C10.2436 17.9695 10.1227 17.9995 10 17.9995C9.87729 17.9995 9.75644 17.9695 9.648 17.9121L9.645 17.9101Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default HeartButton;
