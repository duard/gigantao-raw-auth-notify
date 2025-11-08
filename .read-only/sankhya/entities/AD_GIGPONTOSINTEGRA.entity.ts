import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('AD_GIGPONTOSINTEGRA', { schema: 'SANKHYA' })
export class AdGigpontosintegraEntity {
  @PrimaryColumn({ name: 'ID', type: 'int' })
  id: number;

  @Column({ name: 'CODEMP', type: 'int', nullable: true })
  codemp: number;

  @Column({ name: 'CODFUNC', type: 'int', nullable: true })
  codfunc: number;

  @Column({ name: 'MARCA_PONTO', type: 'datetime', nullable: true })
  marcaPonto: Date;

  @Column({ name: 'ENVIAWPP', type: 'varchar', nullable: true, length: 10 })
  enviawpp: string;

  @Column({ name: 'SHOW', type: 'varchar', nullable: true, length: 10 })
  show: string;

  @Column({ name: 'IP', type: 'varchar', nullable: true, length: 100 })
  ip: string;

  @Column({ name: 'REGISTRO_ORIGINAL', type: 'text', nullable: true })
  registroOriginal: string;

  @Column({ name: 'MOMENTO', type: 'varchar', nullable: true, length: 100 })
  momento: string;

  @Column({ name: 'DT_CREATED', type: 'datetime', nullable: true })
  dtCreated: Date;

  @Column({ name: 'USU_CREATED', type: 'int', nullable: true })
  usuCreated: number;

  @Column({ name: 'DT_UPDT', type: 'datetime', nullable: true })
  dtUpdt: Date;

  @Column({ name: 'USU_UPDT', type: 'int', nullable: true })
  usuUpdt: number;

  @Column({ name: 'PONT_MANU', type: 'varchar', nullable: true, length: 10 })
  pontManu: string;

  @Column({ name: 'PROCESS', type: 'varchar', nullable: true, length: 10 })
  process: string;

  @Column({ name: 'FONTE', type: 'varchar', nullable: true, length: 10 })
  fonte: string;

  @Column({ name: 'NSR', type: 'varchar', nullable: true, length: 100 })
  nsr: string;

  @Column({ name: 'CPF', type: 'varchar', nullable: true, length: 100 })
  cpf: string;

  @Column({ name: 'HASH_UID', type: 'varchar', nullable: true, length: 100 })
  hashUid: string;

  @Column({ name: 'LATITUDE', type: 'float', nullable: true })
  latitude: number;

  @Column({ name: 'LONGITUDE', type: 'float', nullable: true })
  longitude: number;

  @Column({ name: 'COLETOR_ID', type: 'varchar', nullable: true, length: 100 })
  coletorId: string;

  @Column({
    name: 'COLETOR_NOME',
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  coletorNome: string;

  @Column({
    name: 'COLETOR_CATEGORIA',
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  coletorCategoria: string;

  @Column({ name: 'CODLOCAL', type: 'varchar', nullable: true, length: 100 })
  codlocal: string;

  @Column({ name: 'IMG', type: 'text', nullable: true })
  img: string;

  @Column({ name: 'URL_Localiza', type: 'varchar', nullable: true, length: 50 })
  urlLocaliza: string;

  @Column({ name: 'MOMENTO2', type: 'varchar', nullable: true, length: 10 })
  momento2: string;

  @Column({ name: 'ENVIOTEL', type: 'varchar', nullable: true, length: 10 })
  enviotel: string;

  @Column({ name: 'DHEXEC', type: 'smallint', nullable: true })
  dhexec: number;

  @Column({ name: 'DHLIMITE', type: 'datetime', nullable: true })
  dhlimite: Date;
}
