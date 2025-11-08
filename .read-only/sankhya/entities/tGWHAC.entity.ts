import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWHAC', ['codusu', 'codtarefa'], { unique: true })
@Entity('TGWHAC', { schema: 'SANKHYA' })
export class TgwhacEntity {
  @Column('int', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'CODTAREFA' })
  codtarefa: number;

  @Column('varchar', { name: 'DESCRICAO', length: 30, default: () => "' '" })
  descricao: string;

  @Column('datetime', { name: 'DTACESSO', nullable: true })
  dtacesso: Date | null;
}
