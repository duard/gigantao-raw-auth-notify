import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmsaverbhistEntity } from './tMSAVERBHIST.entity';

@Index('PK_TMSCONFAVERB', ['codigo'], { unique: true })
@Entity('TMSCONFAVERB', { schema: 'SANKHYA' })
export class TmsconfaverbEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 100 })
  usuario: string | null;

  @Column('varchar', { name: 'SENHA', nullable: true, length: 100 })
  senha: string | null;

  @Column('varchar', { name: 'CODIGOCLIENTE', nullable: true, length: 100 })
  codigocliente: string | null;

  @Column('varchar', { name: 'AMBIENTE', nullable: true, length: 10 })
  ambiente: string | null;

  @Column('varchar', { name: 'FILTRO', nullable: true, length: 1000 })
  filtro: string | null;

  @Column('varchar', { name: 'EMAILERROS', nullable: true, length: 1000 })
  emailerros: string | null;

  @Column('varchar', { name: 'FILTROCAN', nullable: true, length: 1000 })
  filtrocan: string | null;

  @Column('varchar', { name: 'FILTROCANNFSE', nullable: true, length: 3103 })
  filtrocannfse: string | null;

  @Column('varchar', { name: 'FILTRONFSE', nullable: true, length: 3103 })
  filtronfse: string | null;

  @Column('varchar', { name: 'GRAVAXMLENVIO', nullable: true, length: 10 })
  gravaxmlenvio: string | null;

  @Column('varchar', { name: 'FILTROMDFE', nullable: true, length: 3103 })
  filtromdfe: string | null;

  @Column('varchar', { name: 'FILTROENCMDFE', nullable: true, length: 3103 })
  filtroencmdfe: string | null;

  @Column('varchar', { name: 'FILTROCANMDFE', nullable: true, length: 3103 })
  filtrocanmdfe: string | null;

  @Column('varchar', {
    name: 'FILTROINCCONDMDFE',
    nullable: true,
    length: 3103,
  })
  filtroinccondmdfe: string | null;

  @Column('varchar', { name: 'FILTROPED', nullable: true, length: 3103 })
  filtroped: string | null;

  @Column('varchar', { name: 'FILTROCANPED', nullable: true, length: 3103 })
  filtrocanped: string | null;

  @OneToMany(
    () => TmsaverbhistEntity,
    (tmsaverbhistEntity) => tmsaverbhistEntity.codigo2,
  )
  tmsaverbhists: TmsaverbhistEntity[];
}
