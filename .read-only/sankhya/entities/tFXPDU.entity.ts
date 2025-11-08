import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXPDU', ['codpdv', 'codusuario'], { unique: true })
@Entity('TFXPDU', { schema: 'SANKHYA' })
export class TfxpduEntity {
  @Column('int', { primary: true, name: 'CODPDV' })
  codpdv: number;

  @Column('int', { primary: true, name: 'CODUSUARIO' })
  codusuario: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('char', { name: 'ATUNUVERSAO', nullable: true, length: 1 })
  atunuversao: string | null;
}
