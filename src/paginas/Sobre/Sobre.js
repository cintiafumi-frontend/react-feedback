import React from 'react'
import './Sobre.css'


function Sobre(props) {
	return (
		<div className="sobre">
			<h2>Cuidados com <span className="purple">{"{feed"}</span>back{"}"}</h2>

			<p>Aqui é um espaço para você deixar o feedback para a amiga depois de terem feito um projeto juntas.</p>
			<p>Caso você falte com o bom senso e acabe deixando rastros de sangue no feedback dela, veja abaixo a característica de cada signo para saber quanto tempo levará para ela te perdoar.</p>
			<p>O conteúdo abaixo é resultado de uma pesquisa nada científica, ou seja, nada disso é uma verdade escrita em pedras.</p>
			<p>E quanto mais as amigas forem evoluídas, maior a compreensão delas para te perdoar mesmo que os signos delas digam o contrário.</p>

			<h2>O tempo para cada signo te perdoar</h2>
			<div className="signos">
				<div className="signo signo__fogo">
					<h3 className="signo__titulo">Áries: <small>5 minutos.</small></h3>
					<p className="signo__texto">Mesmo que alguém de Áries esteja completamente magoado e decepcionado, se perceber que a outra pessoa verdadeiramente se arrependeu, é capaz de perdoar. Então, esse signo leva em média cinco minutos para ficar numa boa com o outro.</p>
				</div>
				<div className="signo signo__terra">
					<h3 className="signo__titulo">Touro: <small>3 encarnações.</small></h3>
					<p className="signo__texto">Como é muito pé no chão, pensa muito antes de tomar qualquer tipo de atitude, então boa sorte em tentar ganhar o perdão dos taurinos, eles levam por voltar de três encarnações para esquecerem do que fizeram a ele.</p>
				</div>
				<div className="signo signo__ar">
					<h3 className="signo__titulo">Gêmeos: <small>3 horas (de papo ou sexo).</small></h3>
					<p className="signo__texto">Em três horas você consegue o perdão do geminiano, agora resta saber se será por meio de uma boa conversa ou pelo sexo. Mas saiba: é bastante difícil uma pessoa desse signo falar “eu te perdoo”.</p>
				</div>
				<div className="signo signo__agua">
					<h3 className="signo__titulo">Câncer: <small>1 vida inteira.</small></h3>
					<p className="signo__texto">As pessoas de Câncer são bastante sensíveis, sempre tentam compreender as outras pessoas, por isso, evite magoar alguém desse signo, porque o perdão demorará uma vida inteira para chegar.</p>
				</div>
				<div className="signo signo__fogo">
					<h3 className="signo__titulo">Leão: <small>5 anos.</small></h3>
					<p className="signo__texto">O nativo de Leão tem uma personalidade extremamente forte. Por isso, tem uma certa dificuldade em perdoar alguém que o magoou e leva por volta de uns cinco anos para aceitar que a outra pessoa não é tão horrível assim.</p>
				</div>
				<div className="signo signo__terra">
					<h3 className="signo__titulo">Virgem: <small>50 anos.</small></h3>
					<p className="signo__texto">As pessoas desse signo são um pouco inflexíveis, depois de 50 anos pode até ser que perdoem, mas não esqueça, na primeira briga vai jogar todos os erros na cara do outro.</p>
				</div>
				<div className="signo signo__ar">
					<h3 className="signo__titulo">Libra: <small>15 minutos. Acaba em sexo.</small></h3>
					<p className="signo__texto">O nativo de Libra sempre busca manter a harmonia com as pessoas com quem convive, por isso, em 15 minutos ele irá te perdoar, mas com certeza vai acabar em sexo isso.</p>
				</div>
				<div className="signo signo__agua">
					<h3 className="signo__titulo">Escorpião: <small>"O que é perdão?"</small></h3>
					<p className="signo__texto">Esqueça, escorpiano não sabe o que é perdão. Esse signo leva a fama de vingativo e não pode ser pressionado, ele precisa de um pouco de tempo para lidar com sua mágoa.</p>
				</div>
				<div className="signo signo__fogo">
					<h3 className="signo__titulo">Sagitário: <small>2 dias.</small></h3>
					<p className="signo__texto">Em dois dias as  pessoas de Sagitário te perdoam. Eles podem perdoar uma atitude ruim que você teve, mas nada de dar desculpas simples que não convençam.</p>
				</div>
				<div className="signo signo__terra">
					<h3 className="signo__titulo">Capricórnio: <small>Eternidade</small></h3>
					<p className="signo__texto">O Capricorniano demora muito para confiar nas pessoas, quando alguém o decepciona, ele fica bastante triste, tudo que o nativo desse signo mais odeia é que alguém brinque com os seus sentimentos. Por isso espere pela eternidade para receber o perdão do Capricorniano.</p>
				</div>
				<div className="signo signo__ar">
					<h3 className="signo__titulo">Aquário: <small>Tempo da memória da Dory.</small></h3>
					<p className="signo__texto">O ser de Aquário tem um coração generoso, mesmo que a pessoa não mereça, já que não é de guardar rancor. Ele perdoa rápido e ainda a convida para tomar um sorvete.</p>
				</div>
				<div className="signo signo__agua">
					<h3 className="signo__titulo">Peixes: <small>10 choros.</small></h3>
					<p className="signo__texto">Sensível, depois de dez choros, a pessoa deste signo acaba perdoando, porque guardar ressentimentos faz mal para um pisciano. Ele apenas necessita de tempo e espaço para poder lidar com seus sentimentos ruins transformando-os em bons.</p>
				</div>
			</div>
		</div>
	)
}

export default Sobre