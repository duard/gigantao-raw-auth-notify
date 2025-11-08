import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsfapEntity } from './tCSFAP.entity';

@Index('PK_TCSFHA', ['nufap', 'dhalter'], { unique: true })
@Entity('TCSFHA', { schema: 'SANKHYA' })
export class TcsfhaEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('datetime', { primary: true, name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsfhas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcsfhas)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;
}
