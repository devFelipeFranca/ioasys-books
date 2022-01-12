import styled from "styled-components"

export const FromContainer = styled.form`
  margin-top: 50px;

  width: 100%;

  .input-form_login {
    height: 60px;
    max-width: 360px;

    transition: max-width 0.3s;

    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border-radius: 4px;

    display: flex;
    flex-direction: column;

    padding: 8px 16px;
    margin-bottom: 16px;

    label {
      font: normal 12px/16px "Heebo";
      color: #ffffff6b;
      margin-bottom: 4px;
    }
    input {
      background-color: transparent;
      border: none;

      font: normal 16px/24px "Heebo";

      color: #ffffff;
    }

    input:focus {
      outline: none;
      background: none;
    }
    input:-internal-autofill-selected {
      background: none;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    @media (max-width: 400px) {
      max-width: 288px;
      transition: max-width 0.3s;
    }
  }

  .tooltip {
  }
  [aria-label][class*="cooltipz"].cooltipz--fit:after,
  [aria-label][class*="cooltipz"][data-cooltipz-size="fit"]:after,
  [aria-label][data-cooltipz-dir].cooltipz--fit:after,
  [aria-label][data-cooltipz-dir][data-cooltipz-size="fit"]:after {
    width: 239px;
    height: 48px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
  }
  [aria-label][class*="cooltipz"].cooltipz--bottom-left:before,
  [aria-label][class*="cooltipz"].cooltipz--bottom-right:before,
  [aria-label][class*="cooltipz"].cooltipz--bottom:before,
  [aria-label][class*="cooltipz"][data-cooltipz-dir="bottom-left"]:before,
  [aria-label][class*="cooltipz"][data-cooltipz-dir="bottom-right"]:before,
  [aria-label][class*="cooltipz"][data-cooltipz-dir="bottom"]:before,
  [aria-label][data-cooltipz-dir].cooltipz--bottom-left:before,
  [aria-label][data-cooltipz-dir].cooltipz--bottom-right:before,
  [aria-label][data-cooltipz-dir].cooltipz--bottom:before,
  [aria-label][data-cooltipz-dir][data-cooltipz-dir="bottom-left"]:before,
  [aria-label][data-cooltipz-dir][data-cooltipz-dir="bottom-right"]:before,
  [aria-label][data-cooltipz-dir][data-cooltipz-dir="bottom"]:before {
    border-bottom-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
  }
  [aria-label][class*="cooltipz"]:after,
  [aria-label][data-cooltipz-dir]:after {
    padding-top: 18px;
    text-align: center;

    font: bold 16px/16px "Heebo";
  }

  .none {
    opacity: 0;
    transition: opacity 0.3s;
  }
`
