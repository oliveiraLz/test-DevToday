import { ContainerHome } from './styles';
import { Button, Tooltip } from '@mantine/core';
import { MdVisibility } from 'react-icons/md';
import { Table } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../service/api';
import { ApiGetCountries } from '../../@types/Country';
import { QueriesEnum } from '../../enums/QueriesEnum';
import { Loader } from '../../components/Loader/Loader';

export const Home = () => {
  const navigate = useNavigate();

  const { data, isFetching } = useQuery({
    queryKey: [QueriesEnum.COUNTRIES],
    queryFn: async () => {
      return await api.get<ApiGetCountries[]>('/countries').then(({ data }) => {
        console.log(data);
        return data;
      });
    },
  });

  const rows = data?.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.countryCode}</Table.Td>
      <Table.Td>
        <Tooltip label="Show details">
          <Button
            variant="light"
            onClick={() => navigate(`/country/${element.countryCode}`)}
          >
            <MdVisibility size={14} />
          </Button>
        </Tooltip>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ContainerHome>
      {isFetching ? (
        <Loader />
      ) : (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th align="center">Country Code</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      )}
    </ContainerHome>
  );
};
