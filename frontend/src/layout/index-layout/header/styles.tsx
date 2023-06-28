import styled from '@emotion/styled';

const HeaderStyles = styled.div`
  .header-nav {
    height: 64px;
    padding-left: 16px;
    padding-right: 0;
    border-bottom: 1px solid #dee0e3;

    .header-nav-header {
      .left-arrow-button {
        background-color: transparent;
        padding: 4px;
        height: 26px;
        color: #000;
        margin-right: 6px;

        svg {
          width: 18px;
          height: 18px;
        }

        :hover {
          background-color: rgba(31, 35, 41, 0.1);
        }
      }

      .form-description {
        .title-favorite {
          font-size: 14px;
          display: flex;
          align-items: center;

          .title-input {
            height: 24px;
            border: 0;
            position: relative;
            bottom: 3px;
            width: 50px;
            cursor: pointer;

            input {
              width: 50px;
              height: 24px;
              padding: 0 0 0 5px;
              border: 1px transparent solid;
              border-radius: 6px;

              :hover {
                border: 1px #dee0e3 solid;
              }

              :focus {
                border: 1px #3370ff solid;
                border-radius: 6px;
              }
            }
          }

          .favorite-button {
            background-color: transparent;
            padding: 4px;
            height: 22px;
            color: #000;

            svg {
              width: 14px;
              height: 14px;
            }

            :hover {
              background-color: rgba(31, 35, 41, 0.1);
            }
          }
        }

        .folder-modification {
          display: flex;
          color: #646a73;
          font-size: 12px;

          .folder {
            height: 18px;
            padding: 0 5px;
            background-color: transparent;
            color: #90959d;
            font-weight: normal;
            font-size: 12px;
            border-radius: 6px;

            :hover {
              background-color: #edeeee;
            }

            .semi-button-content-right {
              margin-left: 4px;
              color: #646a73;
            }

            svg {
              width: 12px;
              height: 12px;
            }
          }

          .divider {
            width: 1px;
            height: 12px;
            margin: 3px 8px;
            background-color: #dee0e3;
          }

          .modification {
            height: 18px;
            line-height: 18px;
            padding: 0 4px;
            border-radius: 6px;
            cursor: pointer;

            :hover {
              background-color: #edeeee;
            }
          }
        }
      }
    }
  }
`;

export default HeaderStyles;
