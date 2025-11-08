import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdrcstEntity } from './tGFDRCST.entity';

@Index(
  'PK_TGFDRCSTR0150',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'cnpjdeclpar'],
  {
    unique: true,
  },
)
@Entity('TGFDRCSTR0150', { schema: 'SANKHYA' })
export class Tgfdrcstr0150Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'0150'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CNPJDECLPAR', length: 14 })
  cnpjdeclpar: string;

  @Column('varchar', { name: 'IE', nullable: true, length: 14 })
  ie: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('varchar', { name: 'RAZAO', nullable: true, length: 200 })
  razao: string | null;

  @Column('smallint', { name: 'CODPAIS', nullable: true })
  codpais: number | null;

  @Column('varchar', { name: 'CPFCONTADOR', nullable: true, length: 14 })
  cpfcontador: string | null;

  @Column('int', { name: 'CODMUNICIPAL', nullable: true })
  codmunicipal: number | null;

  @Column('smallint', { name: 'CODSUFRAMA', nullable: true })
  codsuframa: number | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 100 })
  endereco: string | null;

  @Column('smallint', { name: 'NUMERO', nullable: true })
  numero: number | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 100 })
  complemento: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 100 })
  bairro: string | null;

  @Column('smallint', { name: 'CODEMPPART', nullable: true })
  codemppart: number | null;

  @ManyToOne(
    () => TgfdrcstEntity,
    (tgfdrcstEntity) => tgfdrcstEntity.tgfdrcstr0s5,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
  ])
  tgfdrcst: TgfdrcstEntity;
}
