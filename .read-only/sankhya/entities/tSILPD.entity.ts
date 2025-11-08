import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSILPD', ['id', 'tipolog', 'codusu'], { unique: true })
@Entity('TSILPD', { schema: 'SANKHYA' })
export class TsilpdEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'TIPOLOG' })
  tipolog: number;

  @Column('varchar', { name: 'DESCRICAO', length: 2000 })
  descricao: string;

  @Column('datetime', { name: 'DHREGISTRO' })
  dhregistro: Date;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;
}
