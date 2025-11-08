import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfmopEntity } from './tGFMOP.entity';

@Index('PK_TGFEDZ2', ['numov'], { unique: true })
@Entity('TGFEDZ2', { schema: 'SANKHYA' })
export class Tgfedz2Entity {
  @Column('int', { primary: true, name: 'NUMOV' })
  numov: number;

  @Column('varchar', { name: 'TIPDOCPESQ', nullable: true, length: 4 })
  tipdocpesq: string | null;

  @Column('varchar', { name: 'NRODOCPESQ', nullable: true, length: 16 })
  nrodocpesq: string | null;

  @Column('varchar', { name: 'CPF_CNPJ_RET', nullable: true, length: 14 })
  cpfCnpjRet: string | null;

  @Column('varchar', { name: 'NROINSC_RET', nullable: true, length: 16 })
  nroinscRet: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 16 })
  telefone: string | null;

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

  @Column('varchar', { name: 'ATIVIDADE', nullable: true, length: 200 })
  atividade: string | null;

  @Column('varchar', { name: 'DESCRSITCAD', nullable: true, length: 80 })
  descrsitcad: string | null;

  @Column('datetime', { name: 'DTSITCAD', nullable: true })
  dtsitcad: Date | null;

  @Column('varchar', { name: 'REGTRIBICMS', nullable: true, length: 100 })
  regtribicms: string | null;

  @OneToOne(() => TgfmopEntity, (tgfmopEntity) => tgfmopEntity.tgfedz2)
  @JoinColumn([{ name: 'NUMOV', referencedColumnName: 'numov' }])
  numov2: TgfmopEntity;
}
