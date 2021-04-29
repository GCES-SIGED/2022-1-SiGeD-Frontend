import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import {
  TimelineOppositeContent,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab';
import colors from '../../Constants/colors';
import { TimeDiv, UpdateDiv, UserName } from '../DemandHistory/Style';
import { getUser } from '../../Services/Axios/userServices';
import { useProfileUser } from '../../Context';
import ModalHistory from '../ModalHistory';

const ClientHistory = ({ show, handleClose, client }) => {
  const { startModal } = useProfileUser();
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const getUserFromApi = async () => {
    await getUser('users', startModal).then((response) => setUsers(response.data));
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  const dictionary = (word) => {
    if (word === 'address') {
      return 'endereço';
    }
    if (word === 'name') {
      return 'nome';
    }
    if (word === 'office') {
      return 'cargo';
    }
    if (word === 'cpf') {
      return 'CPF';
    }
    if (word === 'phone') {
      return 'telefone';
    }
    if (word === 'location') {
      return 'lotação';
    }
    if (word === 'secondaryPhone') {
      return 'telefone secundário';
    }
    if (word === 'created') {
      return 'criado';
    }
    return word;
  };

  const titleClient = (label) => {
    if (label === 'created') {
      return ' - Cliente ';
    }
    return ' - Atualização de ';
  };

  const showHistory = () => client?.history.map((update) => {
    const findedUser = users?.filter((user) => user?._id === update.userID);

    return (
      <TimelineItem style={{ marginLeft: '8%' }}>
        <TimelineOppositeContent style={{ display: 'none' }} />
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: colors.primary }} />
          <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
        </TimelineSeparator>
        <TimelineContent style={{ width: '100%' }}>
          <TimeDiv>
            {format(new Date(update.date), 'dd/MM/yyyy')}
            {titleClient(update.label)}
            {dictionary(update.label)}
            {' por '}
            <UserName onClick={() => history.push('/usuarios')}>
              {findedUser[0]?.name}
            </UserName>
          </TimeDiv>
          <UpdateDiv>
            {update.before && (
              <p style={{ color: 'red' }}>
                {'Removido: '}
                {update.before}
              </p>
            )}
            {update.after && (
              <p style={{ color: '#5289B5' }}>
                {'Adicionado: '}
                {update.after}
              </p>
            )}
          </UpdateDiv>
        </TimelineContent>
      </TimelineItem>
    );
  });

  return (
    <ModalHistory
      show={show}
      handleClose={handleClose}
    >
      {showHistory()}
    </ModalHistory>
  );
};

export default ClientHistory;
