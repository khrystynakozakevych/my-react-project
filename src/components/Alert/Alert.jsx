import css from './Alert.module.css';
import clsx from 'clsx';

export default function Alert({ variant, outlined, elevated, children }) {
  //   const classNames = ['alert', variant];

  //   if (outlined) {
  //     classNames.push('is-outlined');
  //   }

  //   if (elevated) {
  //     classNames.push('is-elevated');
  //   }

  return (
    <p
      className={clsx(
        css.alert,
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
}
