import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TINUTILIZACAO',
  ['nrounicofiscal', 'codempresa', 'serie', 'docfiscal', 'tpambnfe'],
  {
    unique: true,
  },
)
@Entity('TFXINU', { schema: 'SANKHYA' })
export class TfxinuEntity {
  @Column('int', { primary: true, name: 'NROUNICOFISCAL' })
  nrounicofiscal: number;

  @Column('int', { primary: true, name: 'CODEMPRESA' })
  codempresa: number;

  @Column('varchar', { primary: true, name: 'SERIE', length: 3 })
  serie: string;

  @Column('int', { primary: true, name: 'DOCFISCAL' })
  docfiscal: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('varchar', { name: 'MOTIVO', length: 255 })
  motivo: string;

  @Column('varchar', { name: 'NUMPROTOC', length: 15 })
  numprotoc: string;

  @Column('datetime', { name: 'DHPROTOC' })
  dhprotoc: Date;

  @Column('int', { name: 'CODUSUARIO' })
  codusuario: number;

  @Column('int', { primary: true, name: 'TPAMBNFE' })
  tpambnfe: number;

  @Column('char', {
    name: 'ENTSAI',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  entsai: string | null;

  @Column('numeric', {
    name: 'NUVERSAO',
    nullable: true,
    precision: 19,
    scale: 0,
  })
  nuversao: number | null;
}
