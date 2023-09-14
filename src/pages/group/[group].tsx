// pages/groups/[group].tsx
import { useRouter } from 'next/router';
import { Description_bar } from '../../components/description';

function GroupPage() {
  const router = useRouter();
  const { group: groupid } = router.query; // Obtém o groupid a partir da URL

  return (
    <div>
      <h1>Detalhes do Grupo: {groupid}</h1>
      <Description_bar groupid={groupid} />
      {/* Outros conteúdos relacionados ao grupo */}
    </div>
  );
}

export default GroupPage;
