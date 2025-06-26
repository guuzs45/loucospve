import React from 'react';
import styles from '../styles/JavaScriptLogo.module.css';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const JavaScriptLogo = () => {
  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <RoughNotationGroup show={true}>
        <RoughNotation
          type="highlight"
          color="#F97316" // "#FFD700"
          strokeWidth={3}
          iterations={2}
        >
          <span
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '52px',
              fontWeight: 'bold',
              letterSpacing: '-5px',
              marginLeft: '-5px',
              background: 'linear-gradient(#4FC3F7, #00B0FF, #0288D1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            C
          </span>
        </RoughNotation>

        <RoughNotation
          type="highlight"
          color="#F97316" // "#FFD700"
          strokeWidth={3}
          iterations={2}
        >
          <span
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '48px',
              fontWeight: 'bold',
              letterSpacing: '-5px',
              marginLeft: '-5px',
              background: 'linear-gradient(#4FC3F7, #00B0FF, #0288D1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ode
          </span>
        </RoughNotation>

        <RoughNotation
          type="highlight"
          color="#F97316" // "#FFD700"
          strokeWidth={3}
          iterations={2}
        >
          <span
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '52px',
              fontWeight: 'bold',
              letterSpacing: '-5px',
              marginLeft: '-5px',
              background: 'linear-gradient(#4FC3F7, #00B0FF, #0288D1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            F
          </span>
        </RoughNotation>

        <RoughNotation
          type="highlight"
          color="#F97316" // "#FFD700"
          strokeWidth={3}
          iterations={2}
        >
          <span
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '48px',
              fontWeight: 'bold',
              letterSpacing: '-5px',
              background: 'linear-gradient(#4FC3F7, #00B0FF, #0288D1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            orge
          </span>
        </RoughNotation>
      </RoughNotationGroup>
    </div>
  );
};

export default JavaScriptLogo;