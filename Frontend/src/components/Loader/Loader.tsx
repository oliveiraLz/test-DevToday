import { ContainerLoader } from './styles';
import { Loader as Load } from '@mantine/core';

export const Loader = () => {
  return (
    <ContainerLoader>
      <Load />
    </ContainerLoader>
  );
};
