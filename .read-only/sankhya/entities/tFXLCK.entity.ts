import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXLCK', ['nunota'], { unique: true })
@Index('TFXLCK_IX01', ['numnota', 'serienota'], {})
@Entity('TFXLCK', { schema: 'SANKHYA' })
export class TfxlckEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('varchar', { name: 'SERIENOTA', length: 3, default: () => "' '" })
  serienota: string;

  @Column('int', { name: 'CODPDV' })
  codpdv: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;
}
