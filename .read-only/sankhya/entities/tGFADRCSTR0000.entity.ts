import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFADRCSTR0000', ['codemp', 'referencia', 'reg'], { unique: true })
@Entity('TGFADRCSTR0000', { schema: 'SANKHYA' })
export class Tgfadrcstr0000Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { name: 'CD_FIN', length: 1 })
  cdFin: string;

  @Column('varchar', { name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { name: 'CNPJ_CD', nullable: true, length: 14 })
  cnpjCd: string | null;

  @Column('varchar', { name: 'COD_VERSAO', length: 3 })
  codVersao: string;

  @Column('varchar', { name: 'IE', length: 13 })
  ie: string;

  @Column('varchar', { name: 'IE_CD', nullable: true, length: 10 })
  ieCd: string | null;

  @Column('varchar', { name: 'MES_ANO', length: 6 })
  mesAno: string;

  @Column('varchar', { name: 'N_REG_ESPECIAL', nullable: true, length: 10 })
  nRegEspecial: string | null;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'0000'",
  })
  reg: string;

  @Column('varchar', { name: 'OPCAO_R1200', nullable: true, length: 1 })
  opcaoR1200: string | null;

  @Column('varchar', { name: 'OPCAO_R1300', nullable: true, length: 1 })
  opcaoR1300: string | null;

  @Column('varchar', { name: 'OPCAO_R1400', nullable: true, length: 1 })
  opcaoR1400: string | null;

  @Column('varchar', { name: 'OPCAO_R1500', nullable: true, length: 1 })
  opcaoR1500: string | null;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr0s,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr0s)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
