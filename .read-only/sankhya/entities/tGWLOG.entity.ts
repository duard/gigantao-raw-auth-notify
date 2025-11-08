import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWLOG', ['codusu', 'dhevento', 'sequencia'], { unique: true })
@Entity('TGWLOG', { schema: 'SANKHYA' })
export class TgwlogEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { primary: true, name: 'DHEVENTO' })
  dhevento: Date;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('varchar', { name: 'COMPUTADOR', length: 50 })
  computador: string;

  @Column('int', { primary: true, name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @Column('varchar', { name: 'LISTANOTAS', nullable: true, length: 255 })
  listanotas: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwlogs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
