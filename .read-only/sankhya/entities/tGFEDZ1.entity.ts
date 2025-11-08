import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfmopEntity } from './tGFMOP.entity';

@Index('PK_TGFEDZ1', ['numov'], { unique: true })
@Entity('TGFEDZ1', { schema: 'SANKHYA' })
export class Tgfedz1Entity {
  @Column('int', { primary: true, name: 'NUMOV' })
  numov: number;

  @Column('datetime', { name: 'DTABERTURA', nullable: true })
  dtabertura: Date | null;

  @Column('varchar', { name: 'RAZSOCIAL', nullable: true, length: 150 })
  razsocial: string | null;

  @Column('varchar', { name: 'NOMEFANTASIA', nullable: true, length: 60 })
  nomefantasia: string | null;

  @Column('varchar', { name: 'DESCRNATJUR', nullable: true, length: 100 })
  descrnatjur: string | null;

  @Column('varchar', { name: 'LOGRADOURO', nullable: true, length: 80 })
  logradouro: string | null;

  @Column('varchar', { name: 'NROENDER', nullable: true, length: 20 })
  nroender: string | null;

  @Column('varchar', { name: 'COMPLENDER', nullable: true, length: 70 })
  complender: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 50 })
  bairro: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 60 })
  cidade: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'DESCRSITCAD', nullable: true, length: 80 })
  descrsitcad: string | null;

  @Column('datetime', { name: 'DTSITCAD', nullable: true })
  dtsitcad: Date | null;

  @Column('varchar', { name: 'CNAEPRINCIPAL', nullable: true, length: 7 })
  cnaeprincipal: string | null;

  @Column('varchar', { name: 'CNAESECUNDARIO', nullable: true, length: 70 })
  cnaesecundario: string | null;

  @OneToOne(() => TgfmopEntity, (tgfmopEntity) => tgfmopEntity.tgfedz)
  @JoinColumn([{ name: 'NUMOV', referencedColumnName: 'numov' }])
  numov2: TgfmopEntity;
}
