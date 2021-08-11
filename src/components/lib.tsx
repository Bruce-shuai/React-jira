import styled from "@emotion/styled";

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(prosp) => prosp.marginBottom + "rem"};
  & > * {
    // 直接子元素  这个用法感觉有点秀
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    /* 这里能写成函数也是真的厉害 */
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;
