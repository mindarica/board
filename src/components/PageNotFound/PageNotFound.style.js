import styled from 'styled-components';

export const NotFoundPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* h-screen */
  background-color: #f7fafc; /* bg-gray-100 */
`;

export const ContentContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.25rem; /* text-4xl */
  font-weight: bold; /* font-bold */
  color: #374151; /* text-gray-800 */
  margin-bottom: 1rem; /* mb-4 */
`;

export const Description = styled.p`
  color: #4b5563; /* text-gray-600 */
`;
