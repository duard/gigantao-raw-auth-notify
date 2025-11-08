import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsconfaverbEntity } from './tMSCONFAVERB.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TMSAVERBHIST', ['codigo', 'sequencia'], { unique: true })
@Entity('TMSAVERBHIST', { schema: 'SANKHYA' })
export class TmsaverbhistEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DHENVIO', nullable: true })
  dhenvio: Date | null;

  @Column('datetime', { name: 'DHRETORNO', nullable: true })
  dhretorno: Date | null;

  @Column('varchar', { name: 'XMLRETORNO', nullable: true, length: 3103 })
  xmlretorno: string | null;

  @Column('varchar', { name: 'CHAVECTE', nullable: true, length: 100 })
  chavecte: string | null;

  @Column('varchar', { name: 'SUCESSO', nullable: true, length: 10 })
  sucesso: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('datetime', { name: 'DHPROTOCOLO', nullable: true })
  dhprotocolo: Date | null;

  @Column('varchar', { name: 'PROTOCOLO', nullable: true, length: 100 })
  protocolo: string | null;

  @Column('varchar', { name: 'NUMAVE', nullable: true, length: 100 })
  numave: string | null;

  @Column('text', { name: 'XMLENVIADO', nullable: true })
  xmlenviado: string | null;

  @Column('int', { name: 'NUVIAG', nullable: true })
  nuviag: number | null;

  @Column('int', { name: 'SEQMDFE', nullable: true })
  seqmdfe: number | null;

  @Column('int', { name: 'SEQEVE', nullable: true })
  seqeve: number | null;

  @ManyToOne(
    () => TmsconfaverbEntity,
    (tmsconfaverbEntity) => tmsconfaverbEntity.tmsaverbhists,
  )
  @JoinColumn([{ name: 'CODIGO', referencedColumnName: 'codigo' }])
  codigo2: TmsconfaverbEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsaverbhists)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;
}
