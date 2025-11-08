import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPMTD', ['codmotdeslig'], { unique: true })
@Entity('TFPMTD', { schema: 'SANKHYA' })
export class TfpmtdEntity {
  @Column('varchar', { primary: true, name: 'CODMOTDESLIG', length: 2 })
  codmotdeslig: string;

  @Column('varchar', { name: 'DESCRMOTDESLIG', length: 250 })
  descrmotdeslig: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DTFIMVALIDADEMTD', nullable: true })
  dtfimvalidademtd: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmtds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
