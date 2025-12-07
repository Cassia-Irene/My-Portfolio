'use client'

import CardNav, { CardNavItem } from './components' // ajuste o caminho
import React from 'react'

const navItems: CardNavItem[] = [
  {
    label: 'Home',
    bgColor: 'rgba(58, 56, 79, 0.6)', // fundo semi-transparente
    textColor: '#fff',
    links: [
      { label: 'Seção 1', href: '#section-01', ariaLabel: 'Ir para Seção 1' },
      { label: 'Seção 2', href: '#section-02', ariaLabel: 'Ir para Seção 2' },
    ],
  },
  {
    label: 'Sobre',
    bgColor: 'rgba(58, 56, 79, 0.6)',
    textColor: '#fff',
    links: [
      { label: 'Minha História', href: '#section-03', ariaLabel: 'Ir para Minha História' },
    ],
  },
  {
    label: 'Contato',
    bgColor: 'rgba(58, 56, 79, 0.6)',
    textColor: '#fff',
    links: [
      { label: 'Formulário', href: '#section-04', ariaLabel: 'Ir para Contato' },
    ],
  },
]

const Header = () => {
  return (
    <div className="relative z-[100]">
      <CardNav
        logo="/logo.svg"
        items={navItems}
        baseColor="rgba(0,0,0,0.3)" // fundo transparente
        menuColor="#fff"            // cor do hamburger
        buttonBgColor="#FFBB1B"     // botão Get Started
        buttonTextColor="#000"
        className="rounded-[50px] backdrop-blur-md shadow-lg" // deixa oval + blur
      />
    </div>
  )
}

export default Header
