import { useQuery } from '@tanstack/react-query';
import {
  ContainerBorders,
  ContainerChart,
  ContainerCountry,
  ContainerReturn,
  Content,
  Flag,
} from './styles';
import { api } from '../../service/api';
import { ApiGetCountry } from '../../@types/Country';
import { BarChart } from '@mantine/charts';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { QueriesEnum } from '../../enums/QueriesEnum';
import { Button, Divider, Loader, Title, Table } from '@mantine/core';

export const Country = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const { data, isFetching } = useQuery({
    queryKey: [QueriesEnum.COUNTRY, location.pathname],
    queryFn: async () => {
      return await api
        .get<ApiGetCountry>(`/all-country-info/${id}`)
        .then(({ data }) => {
          console.log(data);

          const dataFormatted = {
            ...data,
            population: data.population.map((population) => ({
              ...population,
              value: population.value,
            })),
          };

          return dataFormatted;
        });
    },
  });

  const rows = data?.countryInfo.borders?.map((element, index) => (
    <Table.Tr key={index + 1}>
      <Table.Td>
        <Link to={`/country/${element.countryCode}`}>{element.commonName}</Link>
      </Table.Td>
      <Table.Td>{element.officialName}</Table.Td>
      <Table.Td>{element.region}</Table.Td>
    </Table.Tr>
  ));

  if (isFetching) {
    return <Loader />;
  }

  return (
    <ContainerCountry>
      <ContainerReturn>
        <Button onClick={() => navigate('/')}>Return</Button>
      </ContainerReturn>

      <Divider />

      <Content>
        <Flag>
          <img src={data?.flag} alt={data?.countryInfo?.commonName} />
        </Flag>
        <Title>{data?.countryInfo.commonName}</Title>
      </Content>

      <ContainerBorders>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Common Name</Table.Th>
              <Table.Th>Official Name</Table.Th>
              <Table.Th>Region</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ContainerBorders>

      <ContainerChart>
        <BarChart
          h={200}
          data={data?.population || []}
          dataKey="year"
          series={[{ name: 'value', color: 'violet.6', label: 'Population' }]}
          tickLine="y"
        />
      </ContainerChart>
    </ContainerCountry>
  );
};
