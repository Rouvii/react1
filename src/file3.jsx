/* eslint-disable react/prop-types */

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

 export function MultiWelcome() {
    return (
      <div>
        <Welcome name="JONAS LANG DILLER" />
        <Welcome name="KEVIN RØDE PUBES HÅR" />
        <Welcome name="FRED 2 FYLDTE HULLER BAG I" />
      </div>
    );
  }
    