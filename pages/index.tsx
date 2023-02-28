import { Layout } from '@/layout/Layout';
import { Button, Tag, Htag, P, Rating } from '@/components';
import { withLayout } from '@/layout/Layout';

function Home(): JSX.Element {
  return (
    <Layout>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Купить
      </Button>
      <Button appearance="ghost" arrow="down">
        Продать
      </Button>
      <P size="s">Маленький</P>
      <P size="m">Средний</P>
      <P size="l">Большой</P>
      <Tag color="ghost" size="m">
        Привет
      </Tag>
      <Tag color="primary" size="s">
        пока
      </Tag>
      <Tag color="red" size="s">
        Hello
      </Tag>
      <Tag color="green" size="m">
        bay
      </Tag>
      <Rating rating={4} />
    </Layout>
  );
}

export default withLayout(Home);
