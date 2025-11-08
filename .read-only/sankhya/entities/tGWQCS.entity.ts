import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWQCS', ['nuseparacao', 'sequencia'], { unique: true })
@Entity('TGWQCS', { schema: 'SANKHYA' })
export class TgwqcsEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { name: 'NUSEPMAE' })
  nusepmae: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'QTDCHECKOUTS' })
  qtdcheckouts: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
