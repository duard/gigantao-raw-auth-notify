import { Column, Entity, Index } from 'typeorm';

@Index('PK__TGFCCA__177D3D036C88B270', ['nunota', 'uuid'], { unique: true })
@Entity('TGFCCA', { schema: 'SANKHYA' })
export class TgfccaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { primary: true, name: 'UUID', length: 50 })
  uuid: string;

  @Column('varchar', { name: 'PARAMS', nullable: true, length: 3103 })
  params: string | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('text', { name: 'LOG', nullable: true })
  log: string | null;
}
