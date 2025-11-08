import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFLIC', ['codtipoper', 'evento', 'sequencia'], { unique: true })
@Entity('TGFLIC', { schema: 'SANKHYA' })
export class TgflicEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'EVENTO' })
  evento: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'A'" })
  tipo: string;

  @Column('char', { name: 'ENVIAREMAIL', length: 1, default: () => "'N'" })
  enviaremail: string;

  @Column('smallint', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('float', { name: 'VLRMIN', precision: 53, default: () => '(0)' })
  vlrmin: number;

  @Column('float', { name: 'VLRMAX', precision: 53, default: () => '(0)' })
  vlrmax: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflics)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflics2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
