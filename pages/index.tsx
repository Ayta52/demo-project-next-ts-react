import { GetStaticProps } from 'next';
import { Button, Tag, Htag, P, Rating } from '@/components';
import { withLayout } from '@/layout/Layout';
import { MenuItem } from '@/interfaces/menu.inteface';
import axios from 'axios';

function Home({ menu }: HomeProps): JSX.Element {
  return (
    <>
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
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
