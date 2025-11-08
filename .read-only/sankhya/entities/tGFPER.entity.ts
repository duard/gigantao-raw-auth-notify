import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgftprEntity } from './tGFTPR.entity';

@Index('PK_TGFPER', ['nuperda'], { unique: true })
@Entity('TGFPER', { schema: 'SANKHYA' })
export class TgfperEntity {
  @Column('int', { primary: true, name: 'NUPERDA' })
  nuperda: number;

  @Column('datetime', { name: 'DTCOLETA', nullable: true })
  dtcoleta: Date | null;

  @Column('smallint', { name: 'QTDFIBRINA', default: () => '(0)' })
  qtdfibrina: number;

  @Column('float', { name: 'PESOBRUTO', precision: 53, default: () => '(0)' })
  pesobruto: number;

  @Column('float', { name: 'PESOTARA', precision: 53, default: () => '(0)' })
  pesotara: number;

  @Column('float', { name: 'PESOLIQUIDO', precision: 53, default: () => '(0)' })
  pesoliquido: number;

  @Column('datetime', {
    name: 'DTMOV',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtmov: Date;

  @Column('char', { name: 'CONFERIDO', length: 1, default: () => "'N'" })
  conferido: string;

  @Column('char', { name: 'CAIXASEMGELO', length: 1, default: () => "'N'" })
  caixasemgelo: string;

  @Column('datetime', { name: 'DTFRIGO', nullable: true })
  dtfrigo: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpers)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgftprEntity, (tgftprEntity) => tgftprEntity.tgfpers)
  @JoinColumn([{ name: 'TIPO', referencedColumnName: 'nutpoperda' }])
  tipo: TgftprEntity;
}
