import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFAL', ['codemp', 'codfunc', 'dtfalta', 'tipreg'], {
  unique: true,
})
@Index('TFPFAL_I01', ['nufalta'], {})
@Entity('TFPFAL', { schema: 'SANKHYA' })
export class TfpfalEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTFALTA' })
  dtfalta: Date;

  @Column('smallint', { primary: true, name: 'TIPREG', default: () => '(-1)' })
  tipreg: number;

  @Column('int', { name: 'NUFALTA' })
  nufalta: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('varchar', { name: 'ORIGEM', length: 1, default: () => "'M'" })
  origem: string;

  @Column('char', { name: 'PERDEDSR', length: 1, default: () => "'S'" })
  perdedsr: string;

  @Column('char', { name: 'SUSPDISCIPLINAR', length: 1, default: () => "'N'" })
  suspdisciplinar: string;

  @Column('float', { name: 'HORAS', nullable: true, precision: 53 })
  horas: number | null;

  @Column('smallint', { name: 'CODHIS', nullable: true })
  codhis: number | null;

  @Column('varchar', { name: 'DESCRHISTOCOR', nullable: true, length: 40 })
  descrhistocor: string | null;
}
