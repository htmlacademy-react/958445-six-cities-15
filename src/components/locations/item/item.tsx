import cn from 'classnames';

type Props = Readonly<{
  name: string;
  active?: boolean;
  className?: string;
}>;

export function Item(props: Props): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={cn('locations__item-link', props.className, {
          ['tabs__item--active']: props.active,
        })}
        href="#"
      >
        <span>{props.name}</span>
      </a>
    </li>
  );
}
