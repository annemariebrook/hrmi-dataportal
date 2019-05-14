import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
// import styled from 'styled-components';
import { Heading, Text, Box } from 'grommet';
import BarHorizontal from 'components/BarHorizontal';
import BarBulletHorizontal from 'components/BarBulletHorizontal';

import rootMessages from 'messages';
import formatScore from 'utils/format-score';

const RightScoreText = props => (
  <Text
    weight="bold"
    size="small"
    alignSelf="end"
    margin={{ right: '52px' }}
    {...props}
  />
);

function RightPanel({ right, column, isSubright, columnLo, columnHi }) {
  const value =
    right.score && right.score[column] && parseFloat(right.score[column]);
  return (
    <Box pad={{ vertical: 'xxsmall', horizontal: 'small' }} fill="horizontal">
      <Heading level={isSubright ? 6 : 5} margin={{ vertical: '2px' }}>
        <FormattedMessage {...rootMessages['rights-short'][right.key]} />
      </Heading>
      {right.type === 'esr' && (
        <BarHorizontal
          level={isSubright ? 3 : 2}
          color={right.dimension}
          value={value}
          minValue={0}
          maxValue={100}
          data={right}
          unit="%"
        />
      )}
      {right.type === 'cpr' && (
        <BarBulletHorizontal
          level={isSubright ? 3 : 2}
          color={right.dimension}
          value={parseFloat(value)}
          band={{
            lo: right.score && parseFloat(right.score[columnLo]),
            hi: right.score && parseFloat(right.score[columnHi]),
          }}
          minValue={0}
          maxValue={10}
          data={right}
        />
      )}
      <RightScoreText color={`${right.dimension}Dark`}>
        {value && formatScore(value)}
      </RightScoreText>
    </Box>
  );
}
RightPanel.propTypes = {
  right: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  column: PropTypes.string,
  isSubright: PropTypes.bool,
  columnLo: PropTypes.string,
  columnHi: PropTypes.string,
};

export default RightPanel;
