document.addEventListener('DOMContentLoaded', () => {
    const candidatesList = document.querySelector('.candidates-list');
    const candidateInfo = document.querySelector('.candidate-info');
    const candidatePhoto = candidateInfo.querySelector('#candidate-photo');
    const partyLogo = candidateInfo.querySelector('#party-logo');
    const candidateName = candidateInfo.querySelector('#candidate-name');
    const candidateParty = candidateInfo.querySelector('#candidate-party');
    const candidateSpeech = candidateInfo.querySelector('#candidate-speech');
    const proposalsButton = document.getElementById('proposals-button');
    const voteButton = document.getElementById('vote-button');
    const voteSuccessModal = document.getElementById('vote-success-modal');
    const closeVoteSuccessButton = document.getElementById('close-vote-success');
    const logoutButton = document.getElementById('logout-button');

    function showCandidate(id) {
        const candidate = candidates.find(c => c.id === id);
        if (candidate) {
            candidatePhoto.src = candidate.photo;
            partyLogo.src = candidate.partySymbol;
            candidateName.textContent = candidate.name;
            candidateParty.textContent = candidate.party;
            candidateSpeech.innerHTML = candidate.speech;
            proposalsButton.onclick = () => showProposals(candidate.proposals);
            voteButton.onclick = () => voteForCandidate(candidate.name);
        }
    }

    function showProposals(proposals) {
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <span class="modal-close">&times;</span>
            <h2>Propuestas</h2>
            <ul>
                ${proposals.map(proposal => `<li>${proposal}</li>`).join('')}
            </ul>
        `;
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal-close').onclick = () => document.querySelector('.modal').style.display = 'none';
    }

    function voteForCandidate(candidateName) {
        voteSuccessModal.style.display = 'flex';
    }

    closeVoteSuccessButton.onclick = () => {
        voteSuccessModal.style.display = 'none';
    };

    logoutButton.onclick = () => {
        window.location.href = 'index.html';
    };

    candidates.forEach(candidate => {
        const candidateCard = document.createElement('div');
        candidateCard.classList.add('candidate-card');
        candidateCard.innerHTML = `
            <img src="${candidate.partySymbol}" class="party-symbol" alt="${candidate.party}">
            <img src="${candidate.photo}" class="candidate-photo" alt="${candidate.name}">
            <div>
                <h3>${candidate.name}</h3>
                <p>${candidate.party}</p>
            </div>
        `;
        candidateCard.onclick = () => {
            document.querySelectorAll('.candidate-card').forEach(card => card.classList.remove('active'));
            candidateCard.classList.add('active');
            showCandidate(candidate.id);
        };
        candidatesList.appendChild(candidateCard);
    });

    // Selecciona automáticamente el primer candidato
    if (candidates.length > 0) {
        document.querySelector('.candidate-card').click();
    }
});
document.querySelector('.logout-button').addEventListener('click', () => {
    window.location.href = 'index.html'; // Cambia 'index.html' por la ruta de tu página principal si es diferente
});
