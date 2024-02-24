import { MainPage } from '../../pages';

type Props = {
  cardsCount: number;
};

export function App(props: Props): JSX.Element {
  return <MainPage {...props} />;
}
